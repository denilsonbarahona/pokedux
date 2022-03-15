const LogMiddlewares = (store)=>next=>(actions)=>{
  //  console.log('action', actions)
   // console.log('store', store)
    next(actions)
}

const TestMiddlewares = (store)=>next=>(actions)=>{
  //  console.log('Este es un test') 
    next(actions)
}

export default [
    LogMiddlewares,
    TestMiddlewares
]