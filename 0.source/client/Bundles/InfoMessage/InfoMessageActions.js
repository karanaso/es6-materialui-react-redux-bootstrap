export const InfoMessageActions = {
      show : (message, duration) => {
        return {
          type : 'ALERT.SHOW',
          payload : {
            message : message,
            duration:duration
          }
        }
      },
      hide : () => {
        return {
          type : 'ALERT.HIDE'
        }
      }
}
