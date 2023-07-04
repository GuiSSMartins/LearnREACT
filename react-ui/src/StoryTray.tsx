export default function StoryTray({ stories } : { stories : any }) {
    return (
      <ul>
        {stories.map((story: any) => (
          <li key={story.id}>
            {story.label}
          </li>
        ))}
        <li>Create Story</li>
      </ul>
    );
  }