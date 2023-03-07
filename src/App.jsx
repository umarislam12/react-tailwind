import { useState } from "react"


function App() {
  const [email, setEmail] = useState("")
  function handleInputChange(event) {
    setEmail(event.target.value);
  }
  return (
    <div className="min-h-screen flex flex-col text-white">
      <main className="container mx-auto px-6 pt-16 flex-1 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">
          Welcome to
        </h2>
        <h2 className="text-3xl md:text-6xl lg:text-8xl font-black uppercase">
          UmarDevApps
        </h2>

        <div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-8 lg:py-6 lg:px-12 bg-white bg-opacity-10 
    w-fit mx-auto mb-8 rounded-full">943,001 members</div>

        <form action="https://github.us14.list-manage.com/subscribe/post?u=7c06238d3fbcdd874f7c2eb8d&amp;id=de402fe0e4&amp;f_id=009592e0f0"
          method="post"
           className="validate" target="_blank" noValidate>
          <div className="flex mx-auto p-6 justify-center flex-col md:flex-row ">


                <div className="mc-field-group">

                  <input type="email" value={email} placeholder="e.g:iumarislam07@gmail.com" onChange={handleInputChange} name="EMAIL"
                   className="text-blue-600 text-lg md:text-2xl rounded-full px-6 py-4 md:px-10 md:py-8 lg:px-10 lg:py-6 bg-opacity-10 
                   focus:bg-opacity-50 focus:animate-none md:rounded-tr-none md:rounded-br-none
                   hover:animate-pulse duration-150 mr-2 placeholder:text-grey-500 placeholder:italic focus:outline-none" required />
                  
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                  <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                </div>
                 {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                  {/* <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7c06238d3fbcdd874f7c2eb8d_de402fe0e4" tabIndex="-1" value="" /></div> */}
                <div className="optionalParent">
                  <div className="clear foot">
                    <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="bg-teal-200	 rounded-full md:rounded-tl-none 
                    md:rounded-bl-none text-lg md:text-2xl px-6 py-4 md:px-10 md:py-8 lg:px-10 lg:py-6 cursor-pointer hover:opacity-75 duration-150" />
                    
                  </div>
                </div>
          </div>
        </form>
      </main>
      <footer className="container mx-auto p-6 flex flex-col md:flex-row items-center justify-between">
        <p>built with 😍 by Umardevapps</p>
        <div className="flex -mx-6">
          <a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a>|
          <a href="#" className="mx-3 hover:opacity-80 duration-150">privacy</a>|
          <a href="#" className="mx-3 hover:opacity-80 duration-150">contact</a>
        </div>

      </footer>
    </div>
  )
}

export default App
