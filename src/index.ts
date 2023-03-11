import { getSnapshotMessage } from './utils';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      /**
       * @param times number of clicks - `default 1`
       *
       * @param options click options
       * @see https://docs.cypress.io/api/commands/click
       */
      clicks(times?: number, options?: Partial<ClickOptions>): Chainable<Subject>;
    }
  }
}

Cypress.Commands.add('clicks', { prevSubject: 'element' }, (subject, times = 1, options) => {
  if (times < 1) throw new Error(`"times" can not be negative or 0 - received "${times}"`);

  cy.wrap(subject, { log: false }).as('element');

  const log = Cypress.log({
    $el: subject,
    autoEnd: false,
    name: 'clicks',
    message: `times: ${times}`,
    consoleProps: () => ({
      command: 'clicks',
      selector: subject.selector,
      element: subject[0],
      times
    })
  });

  log.snapshot('before');

  for (let i = 0; i < times; i++)
    cy.get('@element', { log: false })
      .click({ ...options, log: false })
      .then($el => {
        log.set({ $el });
        log.snapshot(getSnapshotMessage(times, i));
        log.end();
      });

  cy.on('fail', err => {
    log.error(err);
    log.end();
    throw err;
  });
});
