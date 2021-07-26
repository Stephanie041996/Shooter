export function appAlert(title, text) {
    const backView = crel('div');
    backView.className = 'backView';
    doc(document.body, backView);
    backView.setAttribute('tabindex', '0');
    backView.addEventListener('keypress', e => {
      if (e.keyCode === 27) {
        hideView(backView);
      }
    });
    const alertPanel = crel('div');
  alertPanel.className = 'alertPanel';

  const alertTitle = crel('div');
  alertTitle.className = 'alertTitle';
  alertTitle.textContent = title;

  const alertText = crel('div');
  alertText.className = 'alertText';
  alertText.textContent = text;

  const okAlertButton = crel('div');
  okAlertButton.className = 'okAlertButton';
  okAlertButton.textContent = 'OK';
  okAlertButton.addEventListener('click', () => {
    hideView(backView);
  });

  doc(alertPanel, alertTitle);
  doc(alertPanel, alertText);
  doc(alertPanel, okAlertButton);
  doc(backView, alertPanel);
  opac(backView);
}