import React from 'react'

const ExpressCard = () => {
  return (
    <div className="relative rounded-lg bg-[#170c27] p-2 h-[350px] sm:w-[28rem] w-[22rem]">
  <div className="relative flex text-center">
    <div className="flex pl-3.5 pt-3"><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.5 mr-1.5 h-3 w-3 text-red-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-yellow-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg><svg viewBox="0 0 24 24" fill="currentColor" className="-ml-0.75 mr-1.5 h-3 w-3 text-green-500/20">
        <circle r="12" cy="12" cx="12"></circle>
      </svg></div><span className="absolute inset-x-0 top-2 text-xs text-slate-500">server.js</span>
  </div>
  <div className="mt-5 space-y-1.5 px-5 pb-10">
  <p className="mt-4 font-mono text-xs font-normal tracking-wide text-violet-400">
      <span className="text-slate-500"></span><span className="text-blue-100">{`const express = require("express");`} <br />{`const app = express();`} <br />{`const port = 3000;`} <br /> <br />{`const cors = require("cors");`} <br /> <br />{`app.use(cors({ origin: "https://jankuceradev.cz}));`} <br /> <br /> {`app.get("/", (req, res) => {`} <br />&nbsp; &nbsp; {`res.send("General Kenobi")`} <br /> {`});`} <br /> <br /> <br /> {`app.listen(port, () => {`} <br /> &nbsp; &nbsp;  {`console.log(`}`Vidíme se na portu $&#123;port&#125;`{`)`};</span><span className="text-slate-500"></span>
    </p>
    
  </div>
</div>
  )
}

export default ExpressCard