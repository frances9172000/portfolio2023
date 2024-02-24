export default function Theme({
  style,
  sidenav = false,
  changeTheme,
  currentTheme,
  setClose
}) {

  const handleChangeTheme = (theme) => {
    changeTheme(theme);
    sidenav ? setClose() : null
  }

  return (
    <div className={`${style} transition-all`}>
      {currentTheme == "dark" ? (
        <button
        onClick={() => handleChangeTheme('light')}
        className="text-[var(--primary)] dark:text-[var(--secondary)] text-[2rem] inline-block transition-all  hover:scale-150"
      >
        <i className="fa fa-sun"></i>
      </button>
      ) : (
        <button
          onClick={() => handleChangeTheme('dark')}
          className={`text-[2rem] inline-block transition-all  hover:scale-150 ${sidenav ? 'text-white' : 'text-[var(--primary)] dark:text-[var(--secondary)]'}`}
        >
          <i className="fa fa-moon"></i>
        </button>
      )}

      <p className={`text-slate-500 ${sidenav ? "block" : "hidden"}`}>
        Dark mode is {currentTheme == 'dark' ? 'On' : 'Off' }
      </p>
    </div>
  );
}
