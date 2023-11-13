import { list } from "postcss";
import { useState, useEffect } from "react";
import { getAlls } from "../api";

const List = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const limit = 10;

  useEffect(() => {
    async function fetchApi() {
      const result = await getAlls();
      const data = result.data;
      setData(data);
    }

    fetchApi();
  }, []);

  return (
    <>
      {data.length > 0 && (
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1.5 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Apellido
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Telefono
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {data
                      .slice(currentPage, currentPage + limit)
                      .map((element, idx) => (
                        <tr key={idx}>
                          <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                            {element.nombre}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {element.apellido}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                            {element.telefono}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <div className="py-2">
                <button
                  onClick={() =>
                    setCurrentPage(
                      currentPage > 1
                        ? currentPage - 1
                        : Math.ceil(list.length / limit) - 1
                    )
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded mx-2"
                >
                  {"<"}
                </button>
                <button
                  onClick={() =>
                    setCurrentPage(
                      currentPage < Math.ceil(list.length / limit) - 1
                        ? currentPage + 1
                        : 0
                    )
                  }
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded mx-2"
                >
                  {">"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default List;
