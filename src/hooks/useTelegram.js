const tg = window.Telegram.WebApp;
export function useTelegram(){
    const OnClose = () => {
        tg.close()
      }
    const OnToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        }
        else {
            tg.MainButton.show();
        }
    }
      return {
        OnClose,
        OnToggleButton,
        tg,
        user: tg.initDataUnsafe?.user
      }
}