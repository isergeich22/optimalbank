import axios from 'axios';

const backUrl = import.meta.env.VITE_BACKEND_URL || 'http://195.93.252.223:8081/api/v1';

const useFetchDepartments = async () => {
  try {
    const response = await axios.get(`/api/v1/departments`);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data.departments;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

export default useFetchDepartments;
