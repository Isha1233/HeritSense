import React, { useState, useEffect } from 'react';
import Data from './Data'; 
import './CropFilteration.css';

function CropFilteration() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cropSearchTerm, setCropSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cropSearchResults, setCropSearchResults] = useState([]);

  useEffect(() => {
    const stateResults = Data.filter((item) =>
      item.State.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(stateResults);

    const cropResults = Data.filter((item) =>
      item.Crop.toLowerCase().includes(cropSearchTerm.toLowerCase())
    );
    setCropSearchResults(cropResults);
  }, [searchTerm, cropSearchTerm]);

  // Filter combined results based on both search criteria
  const combinedResults = searchResults.filter((stateResult) =>
    cropSearchResults.some((cropResult) => stateResult === cropResult)
  );

  return (
    <div className="bg-blue-100 mt-20 container mx-auto mt-8 p-6  rounded-lg shadow-lg">
           
    <div className=' py-10'>
      <div className='flex justify-center py-6 text-center text-xl gap-4 font-semibold'>
        <h1>Search by State</h1>
        <div>
          <input
            type="text"
            placeholder="Enter state name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <h1>Search by Crop</h1>
        <div>
          <input
            type="text"
            placeholder="Enter crop name..."
            value={cropSearchTerm}
            onChange={(e) => setCropSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {(searchTerm || cropSearchTerm) && combinedResults.length > 0 && (
        <table className="crop-table">
          <thead>
            <tr>
              <th>State</th>
              <th>Region</th>
              <th>Crop</th>
              <th>Duration</th>
              {Data.some((item) => item.Varieties) && <th>Varieties</th>}
              <th>Sown Month</th>
            </tr>
          </thead>
          <tbody>
            {combinedResults.map((item, index) => (
              <tr key={index}>
                <td>{item.State}</td>
                <td>{item.Region}</td>
                <td>{item.Crop}</td>
                <td>{item.Duration}</td>
                {item.Varieties && <td>{item.Varieties}</td>}
                <td>{item.SownMonth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {(searchTerm || cropSearchTerm) && combinedResults.length === 0 && (
        <div className="text-center text-red-500 mt-4">
          No results found for the given criteria.
        </div>
      )}
    </div>
    </div>
  );
}

export default CropFilteration;
