import { useUser, useClerk } from "@clerk/clerk-react";
import { useEffect, useRef, useState } from "react";

const UserCard = () => {
  const { user } = useUser();
  const { signOut, redirectToSignIn } = useClerk();
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  const handleSignOut = async () => {
    await signOut();
  };

  const handleSignInRedirect = () => {
    redirectToSignIn();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cardRef}
      style={{
        position: "absolute",
        top: "80px",
        right: "20px",
        color: "#fff",
        backgroundColor: "#000",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        zIndex: 999,
      }}
    >
      {user ? (
        <>
          <p>Salam, {user.firstName}!</p>
          <button
            onClick={handleSignOut}
            style={{
              marginTop: "10px",
              padding: "8px 12px",
              backgroundColor: "#f44336",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Hesabdan çıx
          </button>
        </>
      ) : (
        <p
          onClick={handleSignInRedirect}
          style={{
            color: "#007bff",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Giriş et
        </p>
      )}
    </div>
  );
};

export default UserCard;
