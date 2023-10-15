import axios from 'axios';

const backUrl = import.meta.env.VITE_BACKEND_URL || 'http://195.93.252.223:8081/api/v1';

const fetchDepartments = async (startDot) => {
  try {
    let response;

    if (startDot) {
      response = await axios.get(
        `${backUrl}/department-compositions?optimal=false&routeType=BY_CAR&topN=5&startingPointLatitude=${startDot[0]}&startingPointLongitude=${startDot[1]}`,
      );
    } else {
      response = await axios.get('http://localhost:5173/api/v1/departments');
    }

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.data.departments;
  } catch (error) {
    console.error('Error fetching departments:', error);
    throw error;
  }
};

export default fetchDepartments;
