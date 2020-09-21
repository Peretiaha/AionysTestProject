import { browser, by, element } from 'protractor';

export class NotePage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getToolBar() {
    return element(by.tagName('mat-toolbar'));
  }

  getSelect() {
    return element(by.css('app-rool mat-select'));
  }

  getTable() {
    return element(by.tagName('table'));
  }

  getAddButton() {
    return element(by.id('addBtn'));
  }

  getOpenModalElement() {
    return element(by.tagName('mat-dialog-container'));
  }

  getSubmitButton() {
    return element(by.id('submit'));
  }

  getCancelButton() {
    return element(by.id('cancel'));
  }

  getNoteElements() {
    return element.all(by.css('tbody tr'));
  }
}
