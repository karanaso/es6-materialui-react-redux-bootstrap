export const SideBarsSchema = {
  leftSideBarOpen : false,
  rightSideBarOpen : false
}

export const SideBarsActions = {
  toggleLeft : ( isOpen ) => {
    return {
      type : (isOpen) ? 'LEFT.OPEN' : 'LEFT.CLOSE'
    }
  },
  toggleRight : ( isOpen ) => {
    return {
      type : (isOpen) ? 'RIGHT.OPEN' : 'RIGHT.CLOSE'
    }
  },
  closeBothSideBars : (  ) => {
    return {
      type : 'CLOSE.BOTH'
    }
  }
}

export const SideBarsReducer = (state = SideBarsSchema , action) => {
  switch(action.type) {
    case 'LEFT.OPEN' :
      return Object.assign({}, state, {leftSideBarOpen:true, rightSideBarOpen : false} );
    case 'LEFT.CLOSE' :
      return Object.assign({}, state, {leftSideBarOpen:false} );
    case 'RIGHT.OPEN' :
      return Object.assign({}, state, {leftSideBarOpen:false, rightSideBarOpen:true} );
    case 'LEFT.CLOSE' :
      return Object.assign({}, state, {rightSideBarOpen:false} );
    case 'CLOSE.BOTH' :
      return Object.assign({}, state, {leftSideBarOpen:false, rightSideBarOpen:false} );
    default :
      return state;
  }
}
