const shareButton = document.querySelector('#share');
const toast = document.querySelector('#toast');
const copyDialog = document.querySelector('#copy-dialog');
let toastTimer;

document.querySelector('#year').textContent = new Date().getFullYear();
shareButton.addEventListener('click', async () => {
  const url = new URL(window.location.href);
  url.hash = '';
  url.search = '';
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(url.href);
    toast.textContent = 'MyLink 주소를 복사했어요.';
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.hidden = true; }, 3000);
  } catch {
    const field = document.querySelector('#share-url');
    field.value = url.href;
    copyDialog.showModal();
    field.focus();
    field.select();
  }
});
