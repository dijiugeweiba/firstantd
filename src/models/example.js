import {initData} from '../services/data'
export default {

  namespace: 'example',

  state: {
    current: '',
    name: '',
    data: [],
    content: '',
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
      // console.log(payload)
      const c = name + String(h)
      yield put({ type: 'getname' , payload:c });
    },
    *getdatae( _, { call, put }) {  // eslint-disable-line
      const data = yield call(initData)
      // console.log(data)
      yield put({ type: 'getdata' , payload:data});
    },
    *getcontente( {payload}, { put }) {  // eslint-disable-line
      yield put({ type: 'getcontent' , payload});
    },

  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    update(state,{payload}) {
      // console.log('payload',payload)
      return { ...state, current:payload };
    },
    getname(state,{payload}) {
      return { ...state, name:payload};
    },
    getdata(state,{payload}) {
      return { ...state, data:payload};
    },
    getcontent(state,{payload}) {
      return { ...state, content:payload};
    },
  },

};
