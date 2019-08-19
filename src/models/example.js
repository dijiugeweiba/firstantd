
export default {

  namespace: 'example',

  state: {
    current: '',
    content: ''
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *updatee({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'update' , payload:'date'});
    },
    *getnamee({ payload }, { put }) {  // eslint-disable-line
      yield put({ type: 'getname' , payload:'John'});
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    update(state,{payload}) {
      console.log('payload',payload)
      return { ...state, current:payload };
    },
    getname(state,{payload}) {
      return { ...state, content:payload };
    }
  },

};
