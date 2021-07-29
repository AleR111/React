export function Message(props) {

    const { user } = props
    return (
        <div>Hello {user.name}!</div>
    );
}