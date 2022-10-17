import { observer } from 'mobx-react';
import React from 'react'
import { useStore } from '../stores/RootStore';


const Body = () => {

const {istStore} = useStore();
  return (
    <div>
        <h1>{istStore.word}</h1>
    </div>
  )
}

export default  observer(Body); 