export default function ContactList({
  selectedContact,
  contacts,
  onSelect,
}: any) {
  return (
    <section className="contact-list">
      <ul>
        {contacts.map((contact: any) => (
          <li key={contact.email}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
