import { Types } from "../../lib/types";

const Option = ({ type, selected }: { type: Types, selected?: Boolean }) => {
	if (type === Types.Binary) {
		return (
			<a className="binary">
				<svg
					width="30"
					height="17"
					viewBox="0 0 30 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.14 10.986C4.464 10.986 4.74 10.948 4.968 10.872C5.2 10.796 5.388 10.692 5.532 10.56C5.68 10.428 5.788 10.272 5.856 10.092C5.924 9.908 5.958 9.708 5.958 9.492C5.958 9.064 5.81 8.728 5.514 8.484C5.218 8.236 4.76 8.112 4.14 8.112H2.34V10.986H4.14ZM2.34 4.386V7.206H3.81C4.438 7.206 4.904 7.08 5.208 6.828C5.516 6.572 5.67 6.228 5.67 5.796C5.67 5.304 5.524 4.946 5.232 4.722C4.94 4.498 4.486 4.386 3.87 4.386H2.34ZM3.87 3.384C4.41 3.384 4.872 3.436 5.256 3.54C5.644 3.644 5.962 3.794 6.21 3.99C6.458 4.186 6.64 4.424 6.756 4.704C6.876 4.98 6.936 5.294 6.936 5.646C6.936 5.854 6.904 6.054 6.84 6.246C6.776 6.438 6.678 6.618 6.546 6.786C6.414 6.95 6.248 7.098 6.048 7.23C5.848 7.362 5.612 7.472 5.34 7.56C6.592 7.808 7.218 8.462 7.218 9.522C7.218 9.89 7.15 10.226 7.014 10.53C6.878 10.83 6.68 11.09 6.42 11.31C6.16 11.53 5.84 11.7 5.46 11.82C5.08 11.94 4.648 12 4.164 12H1.062V3.384H3.87ZM11.8572 9.294C11.3812 9.31 10.9772 9.348 10.6452 9.408C10.3132 9.464 10.0432 9.54 9.83522 9.636C9.62722 9.732 9.47722 9.846 9.38522 9.978C9.29322 10.106 9.24722 10.25 9.24722 10.41C9.24722 10.562 9.27122 10.694 9.31922 10.806C9.37122 10.914 9.43922 11.004 9.52322 11.076C9.61122 11.144 9.71322 11.194 9.82922 11.226C9.94522 11.258 10.0712 11.274 10.2072 11.274C10.3872 11.274 10.5512 11.256 10.6992 11.22C10.8512 11.184 10.9932 11.134 11.1252 11.07C11.2572 11.002 11.3832 10.92 11.5032 10.824C11.6232 10.728 11.7412 10.618 11.8572 10.494V9.294ZM8.42522 6.756C8.76522 6.432 9.13322 6.19 9.52922 6.03C9.92922 5.87 10.3672 5.79 10.8432 5.79C11.1912 5.79 11.4992 5.848 11.7672 5.964C12.0352 6.076 12.2612 6.234 12.4452 6.438C12.6292 6.642 12.7672 6.886 12.8592 7.17C12.9552 7.454 13.0032 7.768 13.0032 8.112V12H12.4812C12.3652 12 12.2772 11.982 12.2172 11.946C12.1572 11.906 12.1092 11.834 12.0732 11.73L11.9472 11.196C11.7912 11.34 11.6372 11.468 11.4852 11.58C11.3332 11.688 11.1732 11.782 11.0052 11.862C10.8412 11.938 10.6652 11.996 10.4772 12.036C10.2892 12.076 10.0812 12.096 9.85322 12.096C9.61322 12.096 9.38722 12.064 9.17522 12C8.96722 11.932 8.78522 11.83 8.62922 11.694C8.47322 11.558 8.34922 11.388 8.25722 11.184C8.16922 10.98 8.12522 10.742 8.12522 10.47C8.12522 10.23 8.18922 10 8.31722 9.78C8.44922 9.556 8.66122 9.356 8.95322 9.18C9.24922 9.004 9.63322 8.86 10.1052 8.748C10.5812 8.636 11.1652 8.572 11.8572 8.556V8.112C11.8572 7.652 11.7592 7.308 11.5632 7.08C11.3672 6.852 11.0792 6.738 10.6992 6.738C10.4432 6.738 10.2272 6.77 10.0512 6.834C9.87922 6.898 9.72922 6.97 9.60122 7.05C9.47722 7.126 9.36722 7.196 9.27122 7.26C9.17922 7.324 9.08322 7.356 8.98322 7.356C8.90322 7.356 8.83322 7.334 8.77322 7.29C8.71722 7.246 8.67122 7.194 8.63522 7.134L8.42522 6.756ZM18.2235 6.954C18.1915 7.006 18.1575 7.044 18.1215 7.068C18.0855 7.088 18.0395 7.098 17.9835 7.098C17.9195 7.098 17.8475 7.076 17.7675 7.032C17.6915 6.988 17.5975 6.94 17.4855 6.888C17.3775 6.836 17.2495 6.788 17.1015 6.744C16.9535 6.7 16.7775 6.678 16.5735 6.678C16.4055 6.678 16.2515 6.7 16.1115 6.744C15.9755 6.784 15.8595 6.842 15.7635 6.918C15.6675 6.99 15.5935 7.078 15.5415 7.182C15.4895 7.282 15.4635 7.39 15.4635 7.506C15.4635 7.658 15.5075 7.784 15.5955 7.884C15.6875 7.984 15.8055 8.07 15.9495 8.142C16.0975 8.214 16.2635 8.28 16.4475 8.34C16.6355 8.396 16.8255 8.456 17.0175 8.52C17.2135 8.584 17.4035 8.658 17.5875 8.742C17.7755 8.822 17.9415 8.924 18.0855 9.048C18.2335 9.168 18.3515 9.314 18.4395 9.486C18.5315 9.658 18.5775 9.868 18.5775 10.116C18.5775 10.4 18.5255 10.664 18.4215 10.908C18.3215 11.148 18.1715 11.356 17.9715 11.532C17.7755 11.708 17.5315 11.846 17.2395 11.946C16.9475 12.046 16.6135 12.096 16.2375 12.096C15.8175 12.096 15.4295 12.026 15.0735 11.886C14.7175 11.746 14.4195 11.568 14.1795 11.352L14.4555 10.902C14.4875 10.846 14.5275 10.804 14.5755 10.776C14.6235 10.744 14.6875 10.728 14.7675 10.728C14.8435 10.728 14.9215 10.756 15.0015 10.812C15.0815 10.868 15.1775 10.93 15.2895 10.998C15.4015 11.062 15.5375 11.122 15.6975 11.178C15.8575 11.23 16.0575 11.256 16.2975 11.256C16.4975 11.256 16.6715 11.232 16.8195 11.184C16.9675 11.132 17.0895 11.064 17.1855 10.98C17.2855 10.892 17.3595 10.792 17.4075 10.68C17.4555 10.568 17.4795 10.45 17.4795 10.326C17.4795 10.166 17.4335 10.034 17.3415 9.93C17.2535 9.822 17.1355 9.73 16.9875 9.654C16.8435 9.578 16.6775 9.512 16.4895 9.456C16.3015 9.4 16.1095 9.34 15.9135 9.276C15.7175 9.212 15.5255 9.138 15.3375 9.054C15.1495 8.97 14.9815 8.864 14.8335 8.736C14.6895 8.608 14.5715 8.452 14.4795 8.268C14.3915 8.084 14.3475 7.86 14.3475 7.596C14.3475 7.36 14.3955 7.134 14.4915 6.918C14.5915 6.702 14.7335 6.512 14.9175 6.348C15.1055 6.184 15.3355 6.054 15.6075 5.958C15.8835 5.858 16.1975 5.808 16.5495 5.808C16.9535 5.808 17.3175 5.872 17.6415 6C17.9695 6.128 18.2495 6.304 18.4815 6.528L18.2235 6.954ZM23.9423 8.274C23.9423 8.042 23.9083 7.828 23.8403 7.632C23.7763 7.436 23.6803 7.266 23.5523 7.122C23.4243 6.978 23.2683 6.866 23.0843 6.786C22.9003 6.706 22.6883 6.666 22.4483 6.666C21.9563 6.666 21.5683 6.808 21.2843 7.092C21.0043 7.376 20.8263 7.77 20.7503 8.274H23.9423ZM24.9083 11.13C24.7643 11.298 24.5983 11.444 24.4103 11.568C24.2223 11.688 24.0223 11.786 23.8103 11.862C23.5983 11.938 23.3783 11.994 23.1503 12.03C22.9263 12.066 22.7043 12.084 22.4843 12.084C22.0643 12.084 21.6743 12.014 21.3143 11.874C20.9583 11.73 20.6483 11.522 20.3843 11.25C20.1243 10.974 19.9203 10.634 19.7723 10.23C19.6283 9.822 19.5563 9.354 19.5563 8.826C19.5563 8.402 19.6223 8.008 19.7543 7.644C19.8863 7.276 20.0743 6.956 20.3183 6.684C20.5663 6.412 20.8683 6.198 21.2243 6.042C21.5803 5.886 21.9803 5.808 22.4243 5.808C22.7963 5.808 23.1383 5.87 23.4503 5.994C23.7663 6.114 24.0383 6.29 24.2663 6.522C24.4943 6.754 24.6723 7.04 24.8003 7.38C24.9323 7.72 24.9983 8.108 24.9983 8.544C24.9983 8.724 24.9783 8.846 24.9383 8.91C24.8983 8.97 24.8243 9 24.7163 9H20.7203C20.7323 9.364 20.7843 9.682 20.8763 9.954C20.9683 10.222 21.0943 10.446 21.2543 10.626C21.4183 10.806 21.6123 10.94 21.8363 11.028C22.0603 11.116 22.3103 11.16 22.5863 11.16C22.8463 11.16 23.0703 11.13 23.2583 11.07C23.4503 11.01 23.6143 10.946 23.7503 10.878C23.8903 10.806 24.0063 10.74 24.0983 10.68C24.1943 10.62 24.2783 10.59 24.3503 10.59C24.4463 10.59 24.5203 10.626 24.5723 10.698L24.9083 11.13Z"
						fill="white"
						fill-opacity="0.8"
						className="base"
					/>
					<path
						d="M28.958 15.445C29.022 15.445 29.072 15.464 29.108 15.502C29.144 15.538 29.162 15.586 29.162 15.646V16H26.27V15.799C26.27 15.759 26.278 15.717 26.294 15.673C26.31 15.627 26.337 15.586 26.375 15.55L27.737 14.185C27.851 14.071 27.954 13.961 28.046 13.855C28.138 13.749 28.216 13.644 28.28 13.54C28.344 13.434 28.393 13.326 28.427 13.216C28.463 13.106 28.481 12.99 28.481 12.868C28.481 12.748 28.462 12.643 28.424 12.553C28.386 12.461 28.334 12.385 28.268 12.325C28.202 12.265 28.124 12.22 28.034 12.19C27.944 12.16 27.847 12.145 27.743 12.145C27.639 12.145 27.543 12.16 27.455 12.19C27.369 12.22 27.292 12.262 27.224 12.316C27.156 12.37 27.099 12.434 27.053 12.508C27.007 12.582 26.974 12.662 26.954 12.748C26.926 12.824 26.89 12.875 26.846 12.901C26.804 12.927 26.742 12.933 26.66 12.919L26.354 12.865C26.382 12.665 26.437 12.489 26.519 12.337C26.601 12.185 26.704 12.058 26.828 11.956C26.952 11.852 27.094 11.774 27.254 11.722C27.416 11.67 27.59 11.644 27.776 11.644C27.964 11.644 28.137 11.672 28.295 11.728C28.455 11.782 28.593 11.861 28.709 11.965C28.825 12.069 28.916 12.196 28.982 12.346C29.048 12.494 29.081 12.662 29.081 12.85C29.081 13.01 29.057 13.159 29.009 13.297C28.963 13.433 28.899 13.563 28.817 13.687C28.737 13.811 28.643 13.932 28.535 14.05C28.429 14.166 28.316 14.284 28.196 14.404L27.104 15.52C27.188 15.498 27.272 15.48 27.356 15.466C27.442 15.452 27.523 15.445 27.599 15.445H28.958Z"
						fill="white"
						fill-opacity="0.8"
						className="digit"
					/>
				</svg>
				Binary
			</a>
		);
	} else if (type === Types.Decimal) {
		return (
			<a className="decimal">
				<svg
					width="33"
					height="17"
					viewBox="0 0 33 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.14 10.986C4.464 10.986 4.74 10.948 4.968 10.872C5.2 10.796 5.388 10.692 5.532 10.56C5.68 10.428 5.788 10.272 5.856 10.092C5.924 9.908 5.958 9.708 5.958 9.492C5.958 9.064 5.81 8.728 5.514 8.484C5.218 8.236 4.76 8.112 4.14 8.112H2.34V10.986H4.14ZM2.34 4.386V7.206H3.81C4.438 7.206 4.904 7.08 5.208 6.828C5.516 6.572 5.67 6.228 5.67 5.796C5.67 5.304 5.524 4.946 5.232 4.722C4.94 4.498 4.486 4.386 3.87 4.386H2.34ZM3.87 3.384C4.41 3.384 4.872 3.436 5.256 3.54C5.644 3.644 5.962 3.794 6.21 3.99C6.458 4.186 6.64 4.424 6.756 4.704C6.876 4.98 6.936 5.294 6.936 5.646C6.936 5.854 6.904 6.054 6.84 6.246C6.776 6.438 6.678 6.618 6.546 6.786C6.414 6.95 6.248 7.098 6.048 7.23C5.848 7.362 5.612 7.472 5.34 7.56C6.592 7.808 7.218 8.462 7.218 9.522C7.218 9.89 7.15 10.226 7.014 10.53C6.878 10.83 6.68 11.09 6.42 11.31C6.16 11.53 5.84 11.7 5.46 11.82C5.08 11.94 4.648 12 4.164 12H1.062V3.384H3.87ZM11.8572 9.294C11.3812 9.31 10.9772 9.348 10.6452 9.408C10.3132 9.464 10.0432 9.54 9.83522 9.636C9.62722 9.732 9.47722 9.846 9.38522 9.978C9.29322 10.106 9.24722 10.25 9.24722 10.41C9.24722 10.562 9.27122 10.694 9.31922 10.806C9.37122 10.914 9.43922 11.004 9.52322 11.076C9.61122 11.144 9.71322 11.194 9.82922 11.226C9.94522 11.258 10.0712 11.274 10.2072 11.274C10.3872 11.274 10.5512 11.256 10.6992 11.22C10.8512 11.184 10.9932 11.134 11.1252 11.07C11.2572 11.002 11.3832 10.92 11.5032 10.824C11.6232 10.728 11.7412 10.618 11.8572 10.494V9.294ZM8.42522 6.756C8.76522 6.432 9.13322 6.19 9.52922 6.03C9.92922 5.87 10.3672 5.79 10.8432 5.79C11.1912 5.79 11.4992 5.848 11.7672 5.964C12.0352 6.076 12.2612 6.234 12.4452 6.438C12.6292 6.642 12.7672 6.886 12.8592 7.17C12.9552 7.454 13.0032 7.768 13.0032 8.112V12H12.4812C12.3652 12 12.2772 11.982 12.2172 11.946C12.1572 11.906 12.1092 11.834 12.0732 11.73L11.9472 11.196C11.7912 11.34 11.6372 11.468 11.4852 11.58C11.3332 11.688 11.1732 11.782 11.0052 11.862C10.8412 11.938 10.6652 11.996 10.4772 12.036C10.2892 12.076 10.0812 12.096 9.85322 12.096C9.61322 12.096 9.38722 12.064 9.17522 12C8.96722 11.932 8.78522 11.83 8.62922 11.694C8.47322 11.558 8.34922 11.388 8.25722 11.184C8.16922 10.98 8.12522 10.742 8.12522 10.47C8.12522 10.23 8.18922 10 8.31722 9.78C8.44922 9.556 8.66122 9.356 8.95322 9.18C9.24922 9.004 9.63322 8.86 10.1052 8.748C10.5812 8.636 11.1652 8.572 11.8572 8.556V8.112C11.8572 7.652 11.7592 7.308 11.5632 7.08C11.3672 6.852 11.0792 6.738 10.6992 6.738C10.4432 6.738 10.2272 6.77 10.0512 6.834C9.87922 6.898 9.72922 6.97 9.60122 7.05C9.47722 7.126 9.36722 7.196 9.27122 7.26C9.17922 7.324 9.08322 7.356 8.98322 7.356C8.90322 7.356 8.83322 7.334 8.77322 7.29C8.71722 7.246 8.67122 7.194 8.63522 7.134L8.42522 6.756ZM18.2235 6.954C18.1915 7.006 18.1575 7.044 18.1215 7.068C18.0855 7.088 18.0395 7.098 17.9835 7.098C17.9195 7.098 17.8475 7.076 17.7675 7.032C17.6915 6.988 17.5975 6.94 17.4855 6.888C17.3775 6.836 17.2495 6.788 17.1015 6.744C16.9535 6.7 16.7775 6.678 16.5735 6.678C16.4055 6.678 16.2515 6.7 16.1115 6.744C15.9755 6.784 15.8595 6.842 15.7635 6.918C15.6675 6.99 15.5935 7.078 15.5415 7.182C15.4895 7.282 15.4635 7.39 15.4635 7.506C15.4635 7.658 15.5075 7.784 15.5955 7.884C15.6875 7.984 15.8055 8.07 15.9495 8.142C16.0975 8.214 16.2635 8.28 16.4475 8.34C16.6355 8.396 16.8255 8.456 17.0175 8.52C17.2135 8.584 17.4035 8.658 17.5875 8.742C17.7755 8.822 17.9415 8.924 18.0855 9.048C18.2335 9.168 18.3515 9.314 18.4395 9.486C18.5315 9.658 18.5775 9.868 18.5775 10.116C18.5775 10.4 18.5255 10.664 18.4215 10.908C18.3215 11.148 18.1715 11.356 17.9715 11.532C17.7755 11.708 17.5315 11.846 17.2395 11.946C16.9475 12.046 16.6135 12.096 16.2375 12.096C15.8175 12.096 15.4295 12.026 15.0735 11.886C14.7175 11.746 14.4195 11.568 14.1795 11.352L14.4555 10.902C14.4875 10.846 14.5275 10.804 14.5755 10.776C14.6235 10.744 14.6875 10.728 14.7675 10.728C14.8435 10.728 14.9215 10.756 15.0015 10.812C15.0815 10.868 15.1775 10.93 15.2895 10.998C15.4015 11.062 15.5375 11.122 15.6975 11.178C15.8575 11.23 16.0575 11.256 16.2975 11.256C16.4975 11.256 16.6715 11.232 16.8195 11.184C16.9675 11.132 17.0895 11.064 17.1855 10.98C17.2855 10.892 17.3595 10.792 17.4075 10.68C17.4555 10.568 17.4795 10.45 17.4795 10.326C17.4795 10.166 17.4335 10.034 17.3415 9.93C17.2535 9.822 17.1355 9.73 16.9875 9.654C16.8435 9.578 16.6775 9.512 16.4895 9.456C16.3015 9.4 16.1095 9.34 15.9135 9.276C15.7175 9.212 15.5255 9.138 15.3375 9.054C15.1495 8.97 14.9815 8.864 14.8335 8.736C14.6895 8.608 14.5715 8.452 14.4795 8.268C14.3915 8.084 14.3475 7.86 14.3475 7.596C14.3475 7.36 14.3955 7.134 14.4915 6.918C14.5915 6.702 14.7335 6.512 14.9175 6.348C15.1055 6.184 15.3355 6.054 15.6075 5.958C15.8835 5.858 16.1975 5.808 16.5495 5.808C16.9535 5.808 17.3175 5.872 17.6415 6C17.9695 6.128 18.2495 6.304 18.4815 6.528L18.2235 6.954ZM23.9423 8.274C23.9423 8.042 23.9083 7.828 23.8403 7.632C23.7763 7.436 23.6803 7.266 23.5523 7.122C23.4243 6.978 23.2683 6.866 23.0843 6.786C22.9003 6.706 22.6883 6.666 22.4483 6.666C21.9563 6.666 21.5683 6.808 21.2843 7.092C21.0043 7.376 20.8263 7.77 20.7503 8.274H23.9423ZM24.9083 11.13C24.7643 11.298 24.5983 11.444 24.4103 11.568C24.2223 11.688 24.0223 11.786 23.8103 11.862C23.5983 11.938 23.3783 11.994 23.1503 12.03C22.9263 12.066 22.7043 12.084 22.4843 12.084C22.0643 12.084 21.6743 12.014 21.3143 11.874C20.9583 11.73 20.6483 11.522 20.3843 11.25C20.1243 10.974 19.9203 10.634 19.7723 10.23C19.6283 9.822 19.5563 9.354 19.5563 8.826C19.5563 8.402 19.6223 8.008 19.7543 7.644C19.8863 7.276 20.0743 6.956 20.3183 6.684C20.5663 6.412 20.8683 6.198 21.2243 6.042C21.5803 5.886 21.9803 5.808 22.4243 5.808C22.7963 5.808 23.1383 5.87 23.4503 5.994C23.7663 6.114 24.0383 6.29 24.2663 6.522C24.4943 6.754 24.6723 7.04 24.8003 7.38C24.9323 7.72 24.9983 8.108 24.9983 8.544C24.9983 8.724 24.9783 8.846 24.9383 8.91C24.8983 8.97 24.8243 9 24.7163 9H20.7203C20.7323 9.364 20.7843 9.682 20.8763 9.954C20.9683 10.222 21.0943 10.446 21.2543 10.626C21.4183 10.806 21.6123 10.94 21.8363 11.028C22.0603 11.116 22.3103 11.16 22.5863 11.16C22.8463 11.16 23.0703 11.13 23.2583 11.07C23.4503 11.01 23.6143 10.946 23.7503 10.878C23.8903 10.806 24.0063 10.74 24.0983 10.68C24.1943 10.62 24.2783 10.59 24.3503 10.59C24.4463 10.59 24.5203 10.626 24.5723 10.698L24.9083 11.13Z"
						fill="white"
						fill-opacity="0.8"
						className="base"
					/>
					<path
						d="M29.066 15.553V16H26.738V15.553H27.65V12.73C27.65 12.64 27.653 12.547 27.659 12.451L26.927 13.072C26.899 13.094 26.871 13.108 26.843 13.114C26.815 13.12 26.788 13.121 26.762 13.117C26.738 13.113 26.716 13.105 26.696 13.093C26.678 13.079 26.663 13.065 26.651 13.051L26.468 12.796L27.758 11.683H28.235V15.553H29.066ZM32.3665 13.846C32.3665 14.222 32.3255 14.548 32.2435 14.824C32.1635 15.1 32.0525 15.329 31.9105 15.511C31.7705 15.691 31.6045 15.825 31.4125 15.913C31.2225 16.001 31.0175 16.045 30.7975 16.045C30.5775 16.045 30.3715 16.001 30.1795 15.913C29.9895 15.825 29.8245 15.691 29.6845 15.511C29.5445 15.329 29.4345 15.1 29.3545 14.824C29.2745 14.548 29.2345 14.222 29.2345 13.846C29.2345 13.47 29.2745 13.144 29.3545 12.868C29.4345 12.59 29.5445 12.361 29.6845 12.181C29.8245 11.999 29.9895 11.864 30.1795 11.776C30.3715 11.688 30.5775 11.644 30.7975 11.644C31.0175 11.644 31.2225 11.688 31.4125 11.776C31.6045 11.864 31.7705 11.999 31.9105 12.181C32.0525 12.361 32.1635 12.59 32.2435 12.868C32.3255 13.144 32.3665 13.47 32.3665 13.846ZM31.7605 13.846C31.7605 13.522 31.7335 13.251 31.6795 13.033C31.6275 12.815 31.5565 12.64 31.4665 12.508C31.3785 12.374 31.2765 12.279 31.1605 12.223C31.0445 12.167 30.9235 12.139 30.7975 12.139C30.6715 12.139 30.5505 12.167 30.4345 12.223C30.3185 12.279 30.2155 12.374 30.1255 12.508C30.0375 12.64 29.9675 12.815 29.9155 13.033C29.8635 13.251 29.8375 13.522 29.8375 13.846C29.8375 14.17 29.8635 14.441 29.9155 14.659C29.9675 14.877 30.0375 15.052 30.1255 15.184C30.2155 15.316 30.3185 15.41 30.4345 15.466C30.5505 15.522 30.6715 15.55 30.7975 15.55C30.9235 15.55 31.0445 15.522 31.1605 15.466C31.2765 15.41 31.3785 15.316 31.4665 15.184C31.5565 15.052 31.6275 14.877 31.6795 14.659C31.7335 14.441 31.7605 14.17 31.7605 13.846Z"
						fill="white"
						fill-opacity="0.8"
						className="digit"
					/>
				</svg>
				Decimal
			</a>
		);
	} else if (type === Types.Octal) {
		return (
			<a className="octal">
				<svg
					width="30"
					height="17"
					viewBox="0 0 30 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.14 10.986C4.464 10.986 4.74 10.948 4.968 10.872C5.2 10.796 5.388 10.692 5.532 10.56C5.68 10.428 5.788 10.272 5.856 10.092C5.924 9.908 5.958 9.708 5.958 9.492C5.958 9.064 5.81 8.728 5.514 8.484C5.218 8.236 4.76 8.112 4.14 8.112H2.34V10.986H4.14ZM2.34 4.386V7.206H3.81C4.438 7.206 4.904 7.08 5.208 6.828C5.516 6.572 5.67 6.228 5.67 5.796C5.67 5.304 5.524 4.946 5.232 4.722C4.94 4.498 4.486 4.386 3.87 4.386H2.34ZM3.87 3.384C4.41 3.384 4.872 3.436 5.256 3.54C5.644 3.644 5.962 3.794 6.21 3.99C6.458 4.186 6.64 4.424 6.756 4.704C6.876 4.98 6.936 5.294 6.936 5.646C6.936 5.854 6.904 6.054 6.84 6.246C6.776 6.438 6.678 6.618 6.546 6.786C6.414 6.95 6.248 7.098 6.048 7.23C5.848 7.362 5.612 7.472 5.34 7.56C6.592 7.808 7.218 8.462 7.218 9.522C7.218 9.89 7.15 10.226 7.014 10.53C6.878 10.83 6.68 11.09 6.42 11.31C6.16 11.53 5.84 11.7 5.46 11.82C5.08 11.94 4.648 12 4.164 12H1.062V3.384H3.87ZM11.8572 9.294C11.3812 9.31 10.9772 9.348 10.6452 9.408C10.3132 9.464 10.0432 9.54 9.83522 9.636C9.62722 9.732 9.47722 9.846 9.38522 9.978C9.29322 10.106 9.24722 10.25 9.24722 10.41C9.24722 10.562 9.27122 10.694 9.31922 10.806C9.37122 10.914 9.43922 11.004 9.52322 11.076C9.61122 11.144 9.71322 11.194 9.82922 11.226C9.94522 11.258 10.0712 11.274 10.2072 11.274C10.3872 11.274 10.5512 11.256 10.6992 11.22C10.8512 11.184 10.9932 11.134 11.1252 11.07C11.2572 11.002 11.3832 10.92 11.5032 10.824C11.6232 10.728 11.7412 10.618 11.8572 10.494V9.294ZM8.42522 6.756C8.76522 6.432 9.13322 6.19 9.52922 6.03C9.92922 5.87 10.3672 5.79 10.8432 5.79C11.1912 5.79 11.4992 5.848 11.7672 5.964C12.0352 6.076 12.2612 6.234 12.4452 6.438C12.6292 6.642 12.7672 6.886 12.8592 7.17C12.9552 7.454 13.0032 7.768 13.0032 8.112V12H12.4812C12.3652 12 12.2772 11.982 12.2172 11.946C12.1572 11.906 12.1092 11.834 12.0732 11.73L11.9472 11.196C11.7912 11.34 11.6372 11.468 11.4852 11.58C11.3332 11.688 11.1732 11.782 11.0052 11.862C10.8412 11.938 10.6652 11.996 10.4772 12.036C10.2892 12.076 10.0812 12.096 9.85322 12.096C9.61322 12.096 9.38722 12.064 9.17522 12C8.96722 11.932 8.78522 11.83 8.62922 11.694C8.47322 11.558 8.34922 11.388 8.25722 11.184C8.16922 10.98 8.12522 10.742 8.12522 10.47C8.12522 10.23 8.18922 10 8.31722 9.78C8.44922 9.556 8.66122 9.356 8.95322 9.18C9.24922 9.004 9.63322 8.86 10.1052 8.748C10.5812 8.636 11.1652 8.572 11.8572 8.556V8.112C11.8572 7.652 11.7592 7.308 11.5632 7.08C11.3672 6.852 11.0792 6.738 10.6992 6.738C10.4432 6.738 10.2272 6.77 10.0512 6.834C9.87922 6.898 9.72922 6.97 9.60122 7.05C9.47722 7.126 9.36722 7.196 9.27122 7.26C9.17922 7.324 9.08322 7.356 8.98322 7.356C8.90322 7.356 8.83322 7.334 8.77322 7.29C8.71722 7.246 8.67122 7.194 8.63522 7.134L8.42522 6.756ZM18.2235 6.954C18.1915 7.006 18.1575 7.044 18.1215 7.068C18.0855 7.088 18.0395 7.098 17.9835 7.098C17.9195 7.098 17.8475 7.076 17.7675 7.032C17.6915 6.988 17.5975 6.94 17.4855 6.888C17.3775 6.836 17.2495 6.788 17.1015 6.744C16.9535 6.7 16.7775 6.678 16.5735 6.678C16.4055 6.678 16.2515 6.7 16.1115 6.744C15.9755 6.784 15.8595 6.842 15.7635 6.918C15.6675 6.99 15.5935 7.078 15.5415 7.182C15.4895 7.282 15.4635 7.39 15.4635 7.506C15.4635 7.658 15.5075 7.784 15.5955 7.884C15.6875 7.984 15.8055 8.07 15.9495 8.142C16.0975 8.214 16.2635 8.28 16.4475 8.34C16.6355 8.396 16.8255 8.456 17.0175 8.52C17.2135 8.584 17.4035 8.658 17.5875 8.742C17.7755 8.822 17.9415 8.924 18.0855 9.048C18.2335 9.168 18.3515 9.314 18.4395 9.486C18.5315 9.658 18.5775 9.868 18.5775 10.116C18.5775 10.4 18.5255 10.664 18.4215 10.908C18.3215 11.148 18.1715 11.356 17.9715 11.532C17.7755 11.708 17.5315 11.846 17.2395 11.946C16.9475 12.046 16.6135 12.096 16.2375 12.096C15.8175 12.096 15.4295 12.026 15.0735 11.886C14.7175 11.746 14.4195 11.568 14.1795 11.352L14.4555 10.902C14.4875 10.846 14.5275 10.804 14.5755 10.776C14.6235 10.744 14.6875 10.728 14.7675 10.728C14.8435 10.728 14.9215 10.756 15.0015 10.812C15.0815 10.868 15.1775 10.93 15.2895 10.998C15.4015 11.062 15.5375 11.122 15.6975 11.178C15.8575 11.23 16.0575 11.256 16.2975 11.256C16.4975 11.256 16.6715 11.232 16.8195 11.184C16.9675 11.132 17.0895 11.064 17.1855 10.98C17.2855 10.892 17.3595 10.792 17.4075 10.68C17.4555 10.568 17.4795 10.45 17.4795 10.326C17.4795 10.166 17.4335 10.034 17.3415 9.93C17.2535 9.822 17.1355 9.73 16.9875 9.654C16.8435 9.578 16.6775 9.512 16.4895 9.456C16.3015 9.4 16.1095 9.34 15.9135 9.276C15.7175 9.212 15.5255 9.138 15.3375 9.054C15.1495 8.97 14.9815 8.864 14.8335 8.736C14.6895 8.608 14.5715 8.452 14.4795 8.268C14.3915 8.084 14.3475 7.86 14.3475 7.596C14.3475 7.36 14.3955 7.134 14.4915 6.918C14.5915 6.702 14.7335 6.512 14.9175 6.348C15.1055 6.184 15.3355 6.054 15.6075 5.958C15.8835 5.858 16.1975 5.808 16.5495 5.808C16.9535 5.808 17.3175 5.872 17.6415 6C17.9695 6.128 18.2495 6.304 18.4815 6.528L18.2235 6.954ZM23.9423 8.274C23.9423 8.042 23.9083 7.828 23.8403 7.632C23.7763 7.436 23.6803 7.266 23.5523 7.122C23.4243 6.978 23.2683 6.866 23.0843 6.786C22.9003 6.706 22.6883 6.666 22.4483 6.666C21.9563 6.666 21.5683 6.808 21.2843 7.092C21.0043 7.376 20.8263 7.77 20.7503 8.274H23.9423ZM24.9083 11.13C24.7643 11.298 24.5983 11.444 24.4103 11.568C24.2223 11.688 24.0223 11.786 23.8103 11.862C23.5983 11.938 23.3783 11.994 23.1503 12.03C22.9263 12.066 22.7043 12.084 22.4843 12.084C22.0643 12.084 21.6743 12.014 21.3143 11.874C20.9583 11.73 20.6483 11.522 20.3843 11.25C20.1243 10.974 19.9203 10.634 19.7723 10.23C19.6283 9.822 19.5563 9.354 19.5563 8.826C19.5563 8.402 19.6223 8.008 19.7543 7.644C19.8863 7.276 20.0743 6.956 20.3183 6.684C20.5663 6.412 20.8683 6.198 21.2243 6.042C21.5803 5.886 21.9803 5.808 22.4243 5.808C22.7963 5.808 23.1383 5.87 23.4503 5.994C23.7663 6.114 24.0383 6.29 24.2663 6.522C24.4943 6.754 24.6723 7.04 24.8003 7.38C24.9323 7.72 24.9983 8.108 24.9983 8.544C24.9983 8.724 24.9783 8.846 24.9383 8.91C24.8983 8.97 24.8243 9 24.7163 9H20.7203C20.7323 9.364 20.7843 9.682 20.8763 9.954C20.9683 10.222 21.0943 10.446 21.2543 10.626C21.4183 10.806 21.6123 10.94 21.8363 11.028C22.0603 11.116 22.3103 11.16 22.5863 11.16C22.8463 11.16 23.0703 11.13 23.2583 11.07C23.4503 11.01 23.6143 10.946 23.7503 10.878C23.8903 10.806 24.0063 10.74 24.0983 10.68C24.1943 10.62 24.2783 10.59 24.3503 10.59C24.4463 10.59 24.5203 10.626 24.5723 10.698L24.9083 11.13Z"
						fill="white"
						fill-opacity="0.8"
						className="base"
					/>
					<path
						d="M27.74 15.583C27.876 15.583 27.997 15.564 28.103 15.526C28.209 15.488 28.299 15.435 28.373 15.367C28.447 15.297 28.503 15.214 28.541 15.118C28.579 15.022 28.598 14.917 28.598 14.803C28.598 14.663 28.575 14.543 28.529 14.443C28.483 14.341 28.421 14.258 28.343 14.194C28.265 14.128 28.174 14.08 28.07 14.05C27.966 14.018 27.856 14.002 27.74 14.002C27.622 14.002 27.511 14.018 27.407 14.05C27.303 14.08 27.212 14.128 27.134 14.194C27.056 14.258 26.994 14.341 26.948 14.443C26.904 14.543 26.882 14.663 26.882 14.803C26.882 14.917 26.901 15.022 26.939 15.118C26.977 15.214 27.033 15.297 27.107 15.367C27.181 15.435 27.271 15.488 27.377 15.526C27.483 15.564 27.604 15.583 27.74 15.583ZM27.74 12.094C27.616 12.094 27.507 12.113 27.413 12.151C27.321 12.187 27.244 12.237 27.182 12.301C27.12 12.365 27.073 12.439 27.041 12.523C27.011 12.607 26.996 12.697 26.996 12.793C26.996 12.887 27.009 12.979 27.035 13.069C27.063 13.157 27.106 13.236 27.164 13.306C27.224 13.374 27.301 13.429 27.395 13.471C27.489 13.513 27.604 13.534 27.74 13.534C27.874 13.534 27.988 13.513 28.082 13.471C28.178 13.429 28.255 13.374 28.313 13.306C28.373 13.236 28.416 13.157 28.442 13.069C28.47 12.979 28.484 12.887 28.484 12.793C28.484 12.697 28.468 12.607 28.436 12.523C28.406 12.439 28.36 12.365 28.298 12.301C28.236 12.237 28.158 12.187 28.064 12.151C27.972 12.113 27.864 12.094 27.74 12.094ZM28.385 13.753C28.653 13.833 28.856 13.962 28.994 14.14C29.134 14.318 29.204 14.543 29.204 14.815C29.204 15.003 29.168 15.173 29.096 15.325C29.026 15.477 28.926 15.607 28.796 15.715C28.668 15.821 28.514 15.903 28.334 15.961C28.154 16.019 27.956 16.048 27.74 16.048C27.524 16.048 27.326 16.019 27.146 15.961C26.966 15.903 26.811 15.821 26.681 15.715C26.553 15.607 26.453 15.477 26.381 15.325C26.311 15.173 26.276 15.003 26.276 14.815C26.276 14.543 26.345 14.318 26.483 14.14C26.623 13.962 26.827 13.833 27.095 13.753C26.873 13.669 26.706 13.544 26.594 13.378C26.482 13.21 26.426 13.011 26.426 12.781C26.426 12.621 26.457 12.472 26.519 12.334C26.583 12.194 26.672 12.073 26.786 11.971C26.902 11.869 27.041 11.789 27.203 11.731C27.365 11.673 27.544 11.644 27.74 11.644C27.936 11.644 28.115 11.673 28.277 11.731C28.439 11.789 28.577 11.869 28.691 11.971C28.807 12.073 28.896 12.194 28.958 12.334C29.022 12.472 29.054 12.621 29.054 12.781C29.054 13.011 28.998 13.21 28.886 13.378C28.774 13.544 28.607 13.669 28.385 13.753Z"
						fill="white"
						fill-opacity="0.8"
						className="digit"
					/>
				</svg>
				Octal
			</a>
		);
	} else {
		return (
			<a className="hexadecimal">
				<svg
					width="33"
					height="17"
					viewBox="0 0 33 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M4.14 10.986C4.464 10.986 4.74 10.948 4.968 10.872C5.2 10.796 5.388 10.692 5.532 10.56C5.68 10.428 5.788 10.272 5.856 10.092C5.924 9.908 5.958 9.708 5.958 9.492C5.958 9.064 5.81 8.728 5.514 8.484C5.218 8.236 4.76 8.112 4.14 8.112H2.34V10.986H4.14ZM2.34 4.386V7.206H3.81C4.438 7.206 4.904 7.08 5.208 6.828C5.516 6.572 5.67 6.228 5.67 5.796C5.67 5.304 5.524 4.946 5.232 4.722C4.94 4.498 4.486 4.386 3.87 4.386H2.34ZM3.87 3.384C4.41 3.384 4.872 3.436 5.256 3.54C5.644 3.644 5.962 3.794 6.21 3.99C6.458 4.186 6.64 4.424 6.756 4.704C6.876 4.98 6.936 5.294 6.936 5.646C6.936 5.854 6.904 6.054 6.84 6.246C6.776 6.438 6.678 6.618 6.546 6.786C6.414 6.95 6.248 7.098 6.048 7.23C5.848 7.362 5.612 7.472 5.34 7.56C6.592 7.808 7.218 8.462 7.218 9.522C7.218 9.89 7.15 10.226 7.014 10.53C6.878 10.83 6.68 11.09 6.42 11.31C6.16 11.53 5.84 11.7 5.46 11.82C5.08 11.94 4.648 12 4.164 12H1.062V3.384H3.87ZM11.8572 9.294C11.3812 9.31 10.9772 9.348 10.6452 9.408C10.3132 9.464 10.0432 9.54 9.83522 9.636C9.62722 9.732 9.47722 9.846 9.38522 9.978C9.29322 10.106 9.24722 10.25 9.24722 10.41C9.24722 10.562 9.27122 10.694 9.31922 10.806C9.37122 10.914 9.43922 11.004 9.52322 11.076C9.61122 11.144 9.71322 11.194 9.82922 11.226C9.94522 11.258 10.0712 11.274 10.2072 11.274C10.3872 11.274 10.5512 11.256 10.6992 11.22C10.8512 11.184 10.9932 11.134 11.1252 11.07C11.2572 11.002 11.3832 10.92 11.5032 10.824C11.6232 10.728 11.7412 10.618 11.8572 10.494V9.294ZM8.42522 6.756C8.76522 6.432 9.13322 6.19 9.52922 6.03C9.92922 5.87 10.3672 5.79 10.8432 5.79C11.1912 5.79 11.4992 5.848 11.7672 5.964C12.0352 6.076 12.2612 6.234 12.4452 6.438C12.6292 6.642 12.7672 6.886 12.8592 7.17C12.9552 7.454 13.0032 7.768 13.0032 8.112V12H12.4812C12.3652 12 12.2772 11.982 12.2172 11.946C12.1572 11.906 12.1092 11.834 12.0732 11.73L11.9472 11.196C11.7912 11.34 11.6372 11.468 11.4852 11.58C11.3332 11.688 11.1732 11.782 11.0052 11.862C10.8412 11.938 10.6652 11.996 10.4772 12.036C10.2892 12.076 10.0812 12.096 9.85322 12.096C9.61322 12.096 9.38722 12.064 9.17522 12C8.96722 11.932 8.78522 11.83 8.62922 11.694C8.47322 11.558 8.34922 11.388 8.25722 11.184C8.16922 10.98 8.12522 10.742 8.12522 10.47C8.12522 10.23 8.18922 10 8.31722 9.78C8.44922 9.556 8.66122 9.356 8.95322 9.18C9.24922 9.004 9.63322 8.86 10.1052 8.748C10.5812 8.636 11.1652 8.572 11.8572 8.556V8.112C11.8572 7.652 11.7592 7.308 11.5632 7.08C11.3672 6.852 11.0792 6.738 10.6992 6.738C10.4432 6.738 10.2272 6.77 10.0512 6.834C9.87922 6.898 9.72922 6.97 9.60122 7.05C9.47722 7.126 9.36722 7.196 9.27122 7.26C9.17922 7.324 9.08322 7.356 8.98322 7.356C8.90322 7.356 8.83322 7.334 8.77322 7.29C8.71722 7.246 8.67122 7.194 8.63522 7.134L8.42522 6.756ZM18.2235 6.954C18.1915 7.006 18.1575 7.044 18.1215 7.068C18.0855 7.088 18.0395 7.098 17.9835 7.098C17.9195 7.098 17.8475 7.076 17.7675 7.032C17.6915 6.988 17.5975 6.94 17.4855 6.888C17.3775 6.836 17.2495 6.788 17.1015 6.744C16.9535 6.7 16.7775 6.678 16.5735 6.678C16.4055 6.678 16.2515 6.7 16.1115 6.744C15.9755 6.784 15.8595 6.842 15.7635 6.918C15.6675 6.99 15.5935 7.078 15.5415 7.182C15.4895 7.282 15.4635 7.39 15.4635 7.506C15.4635 7.658 15.5075 7.784 15.5955 7.884C15.6875 7.984 15.8055 8.07 15.9495 8.142C16.0975 8.214 16.2635 8.28 16.4475 8.34C16.6355 8.396 16.8255 8.456 17.0175 8.52C17.2135 8.584 17.4035 8.658 17.5875 8.742C17.7755 8.822 17.9415 8.924 18.0855 9.048C18.2335 9.168 18.3515 9.314 18.4395 9.486C18.5315 9.658 18.5775 9.868 18.5775 10.116C18.5775 10.4 18.5255 10.664 18.4215 10.908C18.3215 11.148 18.1715 11.356 17.9715 11.532C17.7755 11.708 17.5315 11.846 17.2395 11.946C16.9475 12.046 16.6135 12.096 16.2375 12.096C15.8175 12.096 15.4295 12.026 15.0735 11.886C14.7175 11.746 14.4195 11.568 14.1795 11.352L14.4555 10.902C14.4875 10.846 14.5275 10.804 14.5755 10.776C14.6235 10.744 14.6875 10.728 14.7675 10.728C14.8435 10.728 14.9215 10.756 15.0015 10.812C15.0815 10.868 15.1775 10.93 15.2895 10.998C15.4015 11.062 15.5375 11.122 15.6975 11.178C15.8575 11.23 16.0575 11.256 16.2975 11.256C16.4975 11.256 16.6715 11.232 16.8195 11.184C16.9675 11.132 17.0895 11.064 17.1855 10.98C17.2855 10.892 17.3595 10.792 17.4075 10.68C17.4555 10.568 17.4795 10.45 17.4795 10.326C17.4795 10.166 17.4335 10.034 17.3415 9.93C17.2535 9.822 17.1355 9.73 16.9875 9.654C16.8435 9.578 16.6775 9.512 16.4895 9.456C16.3015 9.4 16.1095 9.34 15.9135 9.276C15.7175 9.212 15.5255 9.138 15.3375 9.054C15.1495 8.97 14.9815 8.864 14.8335 8.736C14.6895 8.608 14.5715 8.452 14.4795 8.268C14.3915 8.084 14.3475 7.86 14.3475 7.596C14.3475 7.36 14.3955 7.134 14.4915 6.918C14.5915 6.702 14.7335 6.512 14.9175 6.348C15.1055 6.184 15.3355 6.054 15.6075 5.958C15.8835 5.858 16.1975 5.808 16.5495 5.808C16.9535 5.808 17.3175 5.872 17.6415 6C17.9695 6.128 18.2495 6.304 18.4815 6.528L18.2235 6.954ZM23.9423 8.274C23.9423 8.042 23.9083 7.828 23.8403 7.632C23.7763 7.436 23.6803 7.266 23.5523 7.122C23.4243 6.978 23.2683 6.866 23.0843 6.786C22.9003 6.706 22.6883 6.666 22.4483 6.666C21.9563 6.666 21.5683 6.808 21.2843 7.092C21.0043 7.376 20.8263 7.77 20.7503 8.274H23.9423ZM24.9083 11.13C24.7643 11.298 24.5983 11.444 24.4103 11.568C24.2223 11.688 24.0223 11.786 23.8103 11.862C23.5983 11.938 23.3783 11.994 23.1503 12.03C22.9263 12.066 22.7043 12.084 22.4843 12.084C22.0643 12.084 21.6743 12.014 21.3143 11.874C20.9583 11.73 20.6483 11.522 20.3843 11.25C20.1243 10.974 19.9203 10.634 19.7723 10.23C19.6283 9.822 19.5563 9.354 19.5563 8.826C19.5563 8.402 19.6223 8.008 19.7543 7.644C19.8863 7.276 20.0743 6.956 20.3183 6.684C20.5663 6.412 20.8683 6.198 21.2243 6.042C21.5803 5.886 21.9803 5.808 22.4243 5.808C22.7963 5.808 23.1383 5.87 23.4503 5.994C23.7663 6.114 24.0383 6.29 24.2663 6.522C24.4943 6.754 24.6723 7.04 24.8003 7.38C24.9323 7.72 24.9983 8.108 24.9983 8.544C24.9983 8.724 24.9783 8.846 24.9383 8.91C24.8983 8.97 24.8243 9 24.7163 9H20.7203C20.7323 9.364 20.7843 9.682 20.8763 9.954C20.9683 10.222 21.0943 10.446 21.2543 10.626C21.4183 10.806 21.6123 10.94 21.8363 11.028C22.0603 11.116 22.3103 11.16 22.5863 11.16C22.8463 11.16 23.0703 11.13 23.2583 11.07C23.4503 11.01 23.6143 10.946 23.7503 10.878C23.8903 10.806 24.0063 10.74 24.0983 10.68C24.1943 10.62 24.2783 10.59 24.3503 10.59C24.4463 10.59 24.5203 10.626 24.5723 10.698L24.9083 11.13Z"
						fill="white"
						fill-opacity="0.8"
						className="base"
					/>
					<path
						d="M29.066 15.553V16H26.738V15.553H27.65V12.73C27.65 12.64 27.653 12.547 27.659 12.451L26.927 13.072C26.899 13.094 26.871 13.108 26.843 13.114C26.815 13.12 26.788 13.121 26.762 13.117C26.738 13.113 26.716 13.105 26.696 13.093C26.678 13.079 26.663 13.065 26.651 13.051L26.468 12.796L27.758 11.683H28.235V15.553H29.066ZM30.7945 15.559C30.9325 15.559 31.0575 15.537 31.1695 15.493C31.2815 15.447 31.3775 15.385 31.4575 15.307C31.5375 15.229 31.5995 15.136 31.6435 15.028C31.6875 14.92 31.7095 14.803 31.7095 14.677C31.7095 14.539 31.6875 14.416 31.6435 14.308C31.6015 14.198 31.5415 14.105 31.4635 14.029C31.3875 13.953 31.2955 13.895 31.1875 13.855C31.0795 13.815 30.9595 13.795 30.8275 13.795C30.6895 13.795 30.5655 13.819 30.4555 13.867C30.3455 13.913 30.2515 13.976 30.1735 14.056C30.0955 14.134 30.0355 14.226 29.9935 14.332C29.9515 14.438 29.9305 14.549 29.9305 14.665C29.9305 14.797 29.9495 14.918 29.9875 15.028C30.0255 15.138 30.0815 15.232 30.1555 15.31C30.2295 15.388 30.3195 15.449 30.4255 15.493C30.5335 15.537 30.6565 15.559 30.7945 15.559ZM30.5185 13.294C30.4845 13.338 30.4505 13.381 30.4165 13.423C30.3845 13.463 30.3535 13.503 30.3235 13.543C30.4195 13.481 30.5255 13.433 30.6415 13.399C30.7595 13.365 30.8865 13.348 31.0225 13.348C31.1925 13.348 31.3545 13.376 31.5085 13.432C31.6625 13.488 31.7975 13.57 31.9135 13.678C32.0315 13.786 32.1245 13.92 32.1925 14.08C32.2605 14.24 32.2945 14.424 32.2945 14.632C32.2945 14.83 32.2585 15.016 32.1865 15.19C32.1145 15.362 32.0125 15.512 31.8805 15.64C31.7505 15.766 31.5945 15.866 31.4125 15.94C31.2305 16.012 31.0285 16.048 30.8065 16.048C30.5865 16.048 30.3875 16.013 30.2095 15.943C30.0335 15.873 29.8825 15.774 29.7565 15.646C29.6325 15.516 29.5365 15.36 29.4685 15.178C29.4005 14.994 29.3665 14.79 29.3665 14.566C29.3665 14.374 29.4075 14.172 29.4895 13.96C29.5735 13.746 29.7055 13.518 29.8855 13.276L30.9625 11.833C30.9925 11.793 31.0345 11.76 31.0885 11.734C31.1425 11.706 31.2045 11.692 31.2745 11.692H31.7965L30.5185 13.294Z"
						fill="white"
						fill-opacity="0.8"
						className="digit"
					/>
				</svg>
				Hexadecimal
			</a>
		);
	}
};

export default Option;
