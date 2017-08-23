

interface UserConnector {
	onUserMessage(onUserMessage: (message: string) => void): void
	send(message: string): void
}

export { UserConnector }