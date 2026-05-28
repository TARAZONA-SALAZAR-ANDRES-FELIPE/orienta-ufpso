import { useEffect } from "react";

function ChatHelp() {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 70px)",
        backgroundColor: "#f9fafb",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <iframe
        src="https://www.chatbase.co/YzZJ5NiOQO9eL2N9FLYdo/help?embed=true"
        title="Chat de soporte OrientaUFPSO"
        style={{ width: "100%", flex: 1, border: "none", display: "block" }}
        allow="microphone"
      />
    </div>
  );
}

export default ChatHelp;
