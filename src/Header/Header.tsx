import { observer } from 'mobx-react';
import React from 'react'
import { useStore } from '../stores/RootStore'



const Header = () => {

    const {istStore} = useStore();
  return (
    <div>
        <button onClick={istStore.handleWord} >button</button>

    </div>
  )
}


export default observer(Header);