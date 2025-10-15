export type State = {
    selectedId: number;
    drafts: { [contactId: number]: string };
};

export type Action = {
    type: 'changed_selection';
    contactId: number;
} | {
    type: 'edited_message';
    message: string;
} | {
    type: 'sent_message';
};

export const initialState = {
    selectedId: 0,
    drafts: {
        0: 'Hello',
        1: '',
        2: '',
    },
};

export function messengerReducer(
    state: State,
    action: Action
): State {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
            };
        }
        case 'edited_message': {
            return {
                ...state,
                drafts: {
                    ...state.drafts,
                    [state.selectedId]: action.message,
                },
            };
        }
        case 'sent_message': {
            return {
                ...state,
                drafts: {
                    ...state.drafts,
                    [state.selectedId]: '',
                },
            };
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}
