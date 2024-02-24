import Social from "./Social";

export default function Contacts() {
  return (
    <div>
      <form action="" className="max-w-2xl m-auto">
        <input
          type="text"
          placeholder="Name"
          className="bg-transparent p-2 my-4 border-2 border-black dark:border-white w-full outline-cyan-800 dark:text-white"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-transparent p-2 border-2 mb-4 border-black dark:border-white w-full outline-cyan-800 dark:text-white"
        />
        <textarea
          name=""
          id=""
          placeholder="Your Message"
          className="bg-transparent h-[250px] p-2 mb-2 border-2 border-black dark:border-white w-full outline-cyan-800 dark:text-white"
        ></textarea>
        <input
          type="submit"
          className="bg-[var(--secondary)] py-2 px-4 font-bold ml-auto block cursor-pointer hover:bg-slate-200 hover:text-black"
        />
      </form>

      <div className="flex items-center my-8">
        <div className="h-1 w-full bg-[var(--secondary)] dark:bg-white"></div>
        <p className="text-4xl text-[var(--secondary)] font-bold font- p-3">
          OR
        </p>
        <div className="h-1 w-full bg-[var(--secondary)] dark:bg-white"></div>
      </div>

      <p className="text-center text-2xl dark:text-white">
        Directly contact me through my email
      </p>

      <div className="text-center">
        <p
          href=""
          className="bg-[var(--secondary)] text-md md:text-2xl py-2 px-4 my-8 font-bold cursor-pointer inline-block hover:bg-slate-200 hover:text-black"
        >
          francesgonzales822@gmail.com
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Social col={false} color={"text-[var(--neon)]"} style={'mt-3 md:mt-8'}/>
      </div>
    </div>
  );
}
