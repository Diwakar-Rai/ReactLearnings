import React from 'react'

function FormEvent() {
    let handleSubmit = e => {
        e.preventDefault();
        console.log(e.target[0].value);
    }
  return (
    <div>
          <form onSubmit={handleSubmit}>
              <div>
                  <input type="text" placeholder='Enter a text' />
              </div>
              <div>
                  <button>submit</button>
              </div>
      </form>
    </div>
  )
}

export default FormEvent
