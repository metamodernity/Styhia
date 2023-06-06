import React from 'react'
import s from './AuthorBlock.module.css'
import { useNavigate } from 'react-router-dom';
import { IconTrash } from '@tabler/icons-react';
import api from '../../../service/api';

export default function AuthorBlock(props) {
  /**
   * @type {{id:number,name:string,surname:string,avatar:number}}
   */
  const data = props.user;
  const history = useNavigate();
  return (
    <div className={s.main}>
      <img className={s.image} src={`/api/avatars/${data?.id??null}`} onClick={()=>history(`/profile/${data.id}`)}/>
      <div className={s.author}>
        <div>
          <div onClick={()=>history(`/profile/${data.id}`)}>
            {`${data.name} ${data.surname}`}
          </div>
          <div className={s.date}>
            {new Date(props.date).toLocaleString()}
          </div>
        </div>
      </div>
      <div style={{display:"flex", flex:"1"}}/>
      {props.deleteId?<IconTrash cursor={"pointer"} onClick={()=>api.removePost(props.deleteId).then(()=>props.reload())} />:undefined}
    </div>
  )
}
