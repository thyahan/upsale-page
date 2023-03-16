import useLogin from "@/features/login/useLogin";

export default function CheckoutFeature() {
  const { isLogin, login, logout } = useLogin();

  if (!isLogin) {
    return <button onClick={login}>login</button>;
  }

  return (
    <div>
      <h1>Checkout Now</h1>
      <button onClick={logout}>logout</button>
    </div>
  );
}
