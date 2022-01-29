import './Button.css';


// 컴포넌트 태그를 작성할 때 전달한 className Props이 마치 HTML 태그의 className 속성을 사용하는 듯한 결과!

function Button({children, onClick, color='blue', className=''}) {
  const classNames = `Button ${color} ${className}`;
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  ) 
}

export default Button;