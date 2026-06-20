window.goToByScroll = function goToByScroll(id) {
  if (!window.jQuery) return;

  const $ = window.jQuery;
  const target = $(`#${id}`);

  if (!target.length) return;

  $('html, body').animate({ scrollTop: target.offset().top }, 30000);
};
