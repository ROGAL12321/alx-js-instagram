import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";

function MessagesForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>
          Message
          <Input
            value={props.messageInput}
            onChange={props.handleMessageChange}
          />
        </label>
        {
          props.isMessageInputError
            ? <small>Pole message musi miec minimum 3 znaki</small>
            : null
        }
      </div>
      <Button
        text="Send"
      />
    </form>
  )
}

export default MessagesForm;