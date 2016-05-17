import {InfoMessageSchema} from './InfoMessageSchema'

export const InfoMessageReducer = ( state = InfoMessageSchema, action) => {
  switch( action.type ) {
    case 'ALERT.SHOW' :
      return Object.assign( {}, state, {open:true, message:action.payload.message, duration : action.payload.duration});
    case 'ALERT.HIDE' :
        return Object.assign( {}, state, {open:false});
    default :
      return state;
  }
}
