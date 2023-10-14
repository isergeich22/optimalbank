const backUrl = import.meta.env.VITE_BACKEND_URL;

const useFetchDepartments = async () => {
  try {
    const response = await fetch(`${backUrl}/departments`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

export default useFetchDepartments;
