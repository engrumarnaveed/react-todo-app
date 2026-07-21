function Header({ total, completed, pending }) {
  return (
    <div className="header">
      <h1>📝 Professional Todo App</h1>

      <div className="stats">
        <p>Total : {total}</p>
        <p>Completed : {completed}</p>
        <p>Pending : {pending}</p>
      </div>
    </div>
  );
}

export default Header;