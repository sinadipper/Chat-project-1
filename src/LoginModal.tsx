export default function LoginModal({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
}) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#404040] bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm w-full text-[#333333]">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#404040]">
          Login
        </h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border border-[#B3B3B3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F78E69]"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-6 border border-[#B3B3B3] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F78E69]"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-[#F78E69] text-white py-3 rounded-lg hover:bg-[#ED7655] transition duration-200"
        >
          Login
        </button>
      </div>
    </div>
  );
}
