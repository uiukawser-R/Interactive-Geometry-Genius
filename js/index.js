
 
 let result =0;

  function areaCalculation(tableContainer,result,title,total){
    const container = document.getElementById(tableContainer);
    const tr = document.createElement('tr');
    
    tr.innerHTML = `
    <td>${result}</td>
    <td>${title}</td>
    <td>${total}<span>cm<sup>2</sup> </span></td>
    <td><button class = "bg-blue-600 px-2 py-2 rounded-md text-white">
    Convert to m<sup>2</sup>
    </button></td>
    
    `;
    container.appendChild(tr);
  }
  function validation(FirstInput,SecondInput){
    if(FirstInput  <= 0 || FirstInput == typeof String){
        alert('please input valid number')
      }else if(SecondInput <= 0 || SecondInput == typeof String){
        alert('Please Enter valid number')
      }
  };
  
  // triangle 
  
  document.getElementById('triangle-btn').addEventListener('click', function(){
    const triangleTitle = document.getElementById('triangle-title').innerText;
    const triangleFirstInput = document.getElementById('triangle-first-input').value;
    const triangleSecondInput = document.getElementById('triangle-second-input').value;
    validation(triangleFirstInput,triangleSecondInput);   
    result = result + 1;
    const total = 0.5 *  parseInt(triangleFirstInput) * parseInt(triangleSecondInput);
    const tableContainer='table-container';
    const title=triangleTitle;
    areaCalculation(tableContainer,result,title,total);

    });
    // rectangle
    document.getElementById('rectangle-btn').addEventListener('click', function(){
        console.log('click');
        const rectangleTitle = document.getElementById('rectangle-title').innerText;
        const rectangleFirstInput = document.getElementById('rectangle-first-input').value;
        const rectangleSecondInput = document.getElementById('rectangle-second-input').value;
        validation(rectangleFirstInput,rectangleSecondInput);   
        result = result + 1;
        const total = parseInt(rectangleFirstInput) * parseInt(rectangleSecondInput);
        const tableContainer='table-container';
        const title=rectangleTitle;
        areaCalculation(tableContainer,result,title,total);
    
        });
        // parallelogram 

        document.getElementById('parallelogram-btn').addEventListener('click', function(){
            console.log('click');
            const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
            const parallelogramFirstInput = document.getElementById('parallelogram-first-input').value;
            const parallelogramSecondInput = document.getElementById('parallelogram-second-input').value;
            validation(parallelogramFirstInput,parallelogramSecondInput);   
            result = result + 1;
            const total = parseInt(parallelogramFirstInput) * parseInt(parallelogramSecondInput);
            const tableContainer='table-container';
            const title=parallelogramTitle;
            areaCalculation(tableContainer,result,title,total);
        
            });
            // rhombus

            document.getElementById('rhombus-btn').addEventListener('click', function(){
                console.log('click');
                const rhombusTitle = document.getElementById('rhombus-title').innerText;
                const rhombusFirstInput = document.getElementById('rhombus-first-input').value;
                const rhombusSecondInput = document.getElementById('rhombus-second-input').value;
                validation(rhombusFirstInput,rhombusSecondInput);   
                result = result + 1;
                const total =0.5 * parseInt(rhombusFirstInput) * parseInt(rhombusSecondInput);
                const tableContainer='table-container';
                const title=rhombusTitle;
                areaCalculation(tableContainer,result,title,total);
            
                });
                // pentagon 
            document.getElementById('pentagon-btn').addEventListener('click', function(){
                console.log('click');
                const pentagonTitle = document.getElementById('pentagon-title').innerText;
                const pentagonFirstInput = document.getElementById('pentagon-first-input').value;
                const pentagonSecondInput = document.getElementById('pentagon-second-input').value;
                validation(pentagonFirstInput,pentagonSecondInput);   
                result = result + 1;
                const total =0.5 * parseInt(pentagonFirstInput) * parseInt(pentagonSecondInput);
                const tableContainer='table-container';
                const title=pentagonTitle;
                areaCalculation(tableContainer,result,title,total);
            
                });
                // ellipse

            document.getElementById('ellipse-btn').addEventListener('click', function(){
                console.log('click');
                const ellipseTitle = document.getElementById('ellipse-title').innerText;
                const ellipseFirstInput = document.getElementById('ellipse-first-input').value;
                const ellipseSecondInput = document.getElementById('ellipse-second-input').value;
                validation(ellipseFirstInput,ellipseSecondInput);   
                result = result + 1;
                const total =3.14 * parseInt(ellipseFirstInput) * parseInt(ellipseSecondInput);
                const tableContainer='table-container';
                const title=ellipseTitle;
                areaCalculation(tableContainer,result,title,total);
            
                });