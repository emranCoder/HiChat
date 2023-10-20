import React from 'react'

export default function ChatBox() {
  return (
    <div className='container-fluid bg-slate-100 h-full'>
        <div className="grid-row">
            <div className="col-md-3">
                <h3>All Chat</h3>
                <ul className="list-group list-group-flush">
                <li className="list-group-item flex justify-normal">
                    <div className="chat-circle-img avatar-img">
                    <img src="https://images.unsplash.com/photo-1604514628550-37477afdf4e3?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZWxzfGVufDB8fDB8fHww" alt="avatar" />
                    </div>
                    <p className='text-lg'>An item</p>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}
