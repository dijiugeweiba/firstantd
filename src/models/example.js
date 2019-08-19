
export default {

  namespace: 'example',

  state: {
    current: '',
    name: ''
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
      const {name, h} = payload
      console.log(payload)
      const c = name + String(h)
      yield put({ type: 'getname' , c });
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
    getname(state,{c}) {
      return { ...state, name:c};
    },
  },

};
