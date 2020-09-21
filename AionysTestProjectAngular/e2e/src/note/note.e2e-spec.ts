import { NotePage } from './note.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: NotePage;

  beforeEach(() => {
    page = new NotePage();
  });

  it('should display toolBar', () => {
    page.navigateTo();
    expect(page.getToolBar()).toBeTruthy();
   });

   it('should display language select', () => {
    page.navigateTo();
    expect(page.getSelect()).toBeTruthy();
   });

  it('should display add button', () => {
    page.navigateTo();
    expect(page.getAddButton()).toBeTruthy();
  });

  it('should display table', () => {
    page.navigateTo();
    expect(page.getTable()).toBeTruthy();
   });

 it('should display note-modal', () => {
  page.navigateTo();
  page.getAddButton().click();
  expect(page.getOpenModalElement()).toBeTruthy();
 });

 it('should display save button in note-modal', () => {
  page.navigateTo();
  page.getAddButton().click();
  expect(page.getSubmitButton()).toBeTruthy();
 });

 it('should display cancel button in note-modal', () => {
  page.navigateTo();
  page.getAddButton().click();
  expect(page.getCancelButton()).toBeTruthy();
 });

 it('should display a list of notes', () => {
  page.navigateTo();
  expect(page.getNoteElements().count()).toBe(7);
});

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
