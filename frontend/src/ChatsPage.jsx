import {MultiChatSocket, MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props)=>{
    const chatProps = useMultiChatLogic('246cea83-af32-4145-a35b-9a1d06070513', props.user.username, props.user.secret);
    return(
        <div style={{height:'100vh'}} >
            <MultiChatSocket {...chatProps} />
            <MultiChatWindow {...chatProps} style={{height: '100%'}} />
        </div>
    )
}
export default ChatsPage