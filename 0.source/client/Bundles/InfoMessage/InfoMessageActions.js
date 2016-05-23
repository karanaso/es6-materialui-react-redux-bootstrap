export const InfoMessageActions = {
      show : (message = '', duration = 2000) => {
        return {
          type : 'ALERT.SHOW',
          payload : {
            message : message,
            duration: (duration > 0) ? duration : 2000
          }
        }
      },
      hide : () => {
        return {
          type : 'ALERT.HIDE'
        }
      }
}
