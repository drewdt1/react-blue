import * as types from "../constants/actionTypes";

/******************************* actions for side bar ************************************/

export const renameComponent = (event) => (dispatch) => {
    const inputName = event.target.value;

    dispatch({
        type: types.RENAME_COMPONENT,
        payload: {
            inputName
        }
    });
};

export const changeType = (event) => (dispatch) => {
    const isContainer = event.target.checked;
    dispatch({
        type: types.CHANGE_TYPE,
        payload: {
            isContainer
        }
    });
};

export const deleteComponent = (componentId) => (dispatch) => {
    dispatch({
        type: types.DELETE_COMPONENT,
        payload: {
            componentId
        }
    });
};

export const updateTree = () => (dispatch) => {
    dispatch({
        type: types.UPDATE_TREE,
        payload: null
    })
}

/******************************* actions for main container ************************************/

export const setCurrentComponent = (currentComponent) => (dispatch) => {
    dispatch({
        type: types.SET_CURRENT_COMPONENT,
        payload: {
            currentComponent
        }
    })
}

export const setTransAndHistory = (translate, history) => (dispatch) => {
    dispatch({
        type: types.SET_TRANS_AND_HISTORY,
        payload: {
            translate,
            history
        }
    })
}

export const undo = () => (dispatch) => {
    dispatch({
        type: types.UN_DO,
        payload: null
    })
}

export const redo = () => (dispatch) => {
    dispatch({
        type: types.RE_DO,
        payload: null
    })
}

/*********************** actions for current component children list ****************************/
export const renameChild = (event, childId) => (dispatch) => {
    const inputName = event.target.value;
    dispatch({
        type: types.RENAME_CHILD,
        payload: {
            inputName,
            childId
        }
    })
}

export const changeChildType = (event, childId) => (dispatch) => {
    const isChecked = event.target.checked;
    dispatch({
        type: types.CHANGE_CHILD_TYPE,
        payload: {
            isChecked,
            childId
        }
    })
}

export const addChild = (event) => (dispatch) => {
    event.preventDefault();
    const name = event.target.childName.value || "DEFAULT_NAME";
    const isContainer = event.target.checkbox.checked;
    // reset the input fields
    document.getElementById("addChildName").value = '';
    document.getElementById("addChildContainerCheckbox").checked = false;
    
    dispatch({
        type: types.ADD_CHILD,
        payload: {
            name,
            isContainer
        }
    })

}

export const deleteChild = (childId) => (dispatch) => {
    dispatch({
        type: types.DELETE_CHILD,
        payload: {
            childId
        }
    })
}

/*********************** actions for exporting files/project ****************************/

import JSZip from 'jszip'; // for exporting project
import FileSave from 'file-saver'; // for exporting project

const zip = new JSZip();

export const exportProject = () => (dispatch) => {
  console.log('in exportProject actions.js');
  // console.log(state.data)
  zip.file('hello.txt', 'sup....')
  console.log(zip.files);
  zip.generateAsync({type: 'blob'}).then(function(blob) {
    saveAs(blob, 'drew.zip')
  })
  dispatch({
    type: types.EXPORT_PROJECT,
    payload: null
  })
}

