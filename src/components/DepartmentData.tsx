import React, { useState } from 'react';

interface SubDepartment {
  department: string;
  sub_departments: string[];
}

const mockData: SubDepartment[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DepartmentList: React.FC = () => {
  const [selectedDepartments, setSelectedDepartments] = useState<string[]>([]);
  const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);

  const toggleSelection = (item:SubDepartment, subDepartment?: string) => {
    setSelectedDepartments((prevSelection) => {
      if (subDepartment) {
        // Toggle sub-department selection
        const updatedSelection = prevSelection.includes(subDepartment)
          ? prevSelection.filter((dep) => dep !== subDepartment)
          : [...prevSelection, subDepartment];
  
        // Check if all sub-departments are selected, then also select the parent department
        const allSubDepartmentsSelected = item.sub_departments.every((subDep) =>
          updatedSelection.includes(subDep)
        );
  
        return allSubDepartmentsSelected
          ? [...updatedSelection, item.department]
          : updatedSelection.filter((dep) => dep !== item.department);
      } else {
        // Toggle department and its sub-departments
        const isSelected = prevSelection.includes(item.department);
        const updatedSelection = isSelected
          ? prevSelection.filter((dep) => dep !== item.department && !item.sub_departments.includes(dep))
          : [...prevSelection, item.department, ...item.sub_departments];
  
        return updatedSelection;
      }
    });
  };

  const toggleExpand = (department: string) => {
    setExpandedDepartments((prevExpanded) => {
      return prevExpanded.includes(department)
        ? prevExpanded.filter((dep) => dep !== department)
        : [...prevExpanded, department];
    });
  };
  
  return (
    <div className='depart-list-data-containor'>
      {mockData.map((item) => (
        <div  className='depart-data-Subcontainor' key={item.department}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input className='parent-checkbox'
              type="checkbox"
              checked={selectedDepartments.includes(item.department)}
              onChange={() => toggleSelection(item)}
            />
            <h3>{item.department}</h3>
            <button className='toggle-btn' onClick={() => toggleExpand(item.department)}>
              {expandedDepartments.includes(item.department) ? '➖' : '➕'}
            </button>
          </div>
          {expandedDepartments.includes(item.department) && (
            <ul>
              {item.sub_departments.map((subDepartment) => (
                <li key={subDepartment} className='child-department'>
                  <input className='child-checkbox'
                    type="checkbox"
                    checked={selectedDepartments.includes(subDepartment)}
                    onChange={() => toggleSelection(item, subDepartment)}
                  />
                  {subDepartment}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DepartmentList;