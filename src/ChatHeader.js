import { EditLocation, HelpRounded, Notifications, PeopleAltRounded, SearchRounded, SendRounded } from '@material-ui/icons'
import React from 'react'
import './ChatHeader.css'

function ChatHeader({ channelName }) {
    return (
        <div className = "chatHeader">
            <div className = "chatHeader__left">
                <h3>
                    <span className = "chatHeader__hash">
                       <em> JM</em>
                    </span>
                        {channelName}
                </h3>
            </div>
            <div className = "chatHeader__right">

                <div className = "chatHeader__search">
                    <input placeholder = "search" />
                    <SearchRounded />
                </div>
            </div>
        </div>
    )
}

export default ChatHeader
