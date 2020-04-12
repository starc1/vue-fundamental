export const Hello = {
    template: `
    <P>
        State counter pada hello:
        {{ counter }}
    </P>
    `,
    computed: {
        counter() {
            return store.state.counter
        }
    }
}