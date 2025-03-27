const API_URL = import.meta.env.REACT_APP_API_URL;

export const lobbyLoader = async () => {
  try {
    const response = await fetch(`${API_URL}/codeblocks`);
    if (!response.ok) throw new Error('Failed to fetch code blocks');
    return response.json();
  } catch (error) {
    console.error('Error loading lobby data:', error);
    return { error: 'Failed to load code blocks. Please try again later.' };
  }
};

export const codePageLoader = async ({ params }) => {
  try {
    console.log("IDd:", params.id);
    const response = await fetch(`${API_URL}/codeblocks/${params.id}`);
    console.log("CodeBlock Data from lader:", response);
    if (!response.ok) throw new Error('Failed to fetch code block');
    return response.json();
  } catch (error) {
    console.error('Error loading code block data:', error);
    return { error: 'Failed to load code block. Please try again later.' };
  }
};

  