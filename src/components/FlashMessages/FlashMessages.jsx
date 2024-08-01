function FlashMessages(props) {
  return (
    <div className="floating-alerts">
      {props.messages.map((msg, index) => {
        const alertClass = msg.type === "error" ? "floating-alert error" : "floating-alert"
        return (
          <div key={index} className={alertClass}>
            {msg.text}
          </div>
        )
      })}
    </div>
  )
}

export default FlashMessages
