import { FileCardStyled } from './styles'
import { FaFileAlt } from 'react-icons/fa'

export const TYPES = {
    excel: 'xlsx',
    word: 'docx',
    powerpoint: 'pptx',
    pdf: 'pdf',
    generic: 'generic'
}
export const FileCard = ({ type, downloadUrl }) => {
    return (
        <FileCardStyled type={type} to={downloadUrl}>
            {type === TYPES.pdf && (
                <svg
                    width="75"
                    height="100"
                    viewBox="0 0 75 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M71.3477 18.2383L56.7715 3.66016C54.4141 1.3168 51.2305 0 47.9297 0H12.5C5.5957 0 0 5.5957 0 12.5L0.00126953 87.5C0.00126953 94.4023 5.59697 100 12.5013 100H62.5C69.375 100 75 94.375 75 87.5V27.0703C75 23.7695 73.6914 20.5859 71.3477 18.2383ZM65.625 87.5C65.625 89.2258 64.2258 90.625 62.5 90.625H12.5039C10.7777 90.625 9.37891 89.2258 9.37891 87.5L9.375 12.5254C9.375 10.7996 10.7742 9.40039 12.5 9.40039H43.75V25C43.75 28.4512 46.5488 31.25 50 31.25H65.4492V87.5H65.625ZM41.9141 48.4375C41.2695 46.5625 39.4922 45.3125 37.5 45.3125C35.5078 45.3125 33.7402 46.5637 33.082 48.4375L28.2617 62.1289L23.2051 46.9609C22.3828 44.4922 19.7266 43.2031 17.2676 43.9844C14.8105 44.8047 13.4863 47.4609 14.3027 49.9219L23.6777 78.0469C24.3164 79.9414 26.0742 81.2305 28.0859 81.25C30.0723 81.25 31.8848 79.9988 32.5449 78.125L37.5 64.082L42.4609 78.125C43.125 80 44.8828 81.25 46.875 81.25C48.8809 81.2317 50.6895 79.9437 51.3223 78.0449L60.6973 49.9199C61.5152 47.4609 60.1906 44.8105 57.7344 43.9863C55.2715 43.1807 52.6172 44.493 51.8047 46.9531L46.748 62.1211L41.9141 48.4375Z"
                        fill="white"
                    />
                </svg>
            )}

            {type === TYPES.word && (
                <svg
                    width="75"
                    height="100"
                    viewBox="0 0 75 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M71.3477 18.2383L56.7715 3.66016C54.4141 1.3168 51.2305 0 47.9297 0H12.5C5.5957 0 0 5.5957 0 12.5L0.00126953 87.5C0.00126953 94.4023 5.59697 100 12.5013 100H62.5C69.375 100 75 94.375 75 87.5V27.0703C75 23.7695 73.6914 20.5859 71.3477 18.2383ZM65.625 87.5C65.625 89.2258 64.2258 90.625 62.5 90.625H12.5039C10.7777 90.625 9.37891 89.2258 9.37891 87.5L9.375 12.5254C9.375 10.7996 10.7742 9.40039 12.5 9.40039H43.75V25C43.75 28.4512 46.5488 31.25 50 31.25H65.4492V87.5H65.625ZM41.9141 48.4375C41.2695 46.5625 39.4922 45.3125 37.5 45.3125C35.5078 45.3125 33.7402 46.5637 33.082 48.4375L28.2617 62.1289L23.2051 46.9609C22.3828 44.4922 19.7266 43.2031 17.2676 43.9844C14.8105 44.8047 13.4863 47.4609 14.3027 49.9219L23.6777 78.0469C24.3164 79.9414 26.0742 81.2305 28.0859 81.25C30.0723 81.25 31.8848 79.9988 32.5449 78.125L37.5 64.082L42.4609 78.125C43.125 80 44.8828 81.25 46.875 81.25C48.8809 81.2317 50.6895 79.9437 51.3223 78.0449L60.6973 49.9199C61.5152 47.4609 60.1906 44.8105 57.7344 43.9863C55.2715 43.1807 52.6172 44.493 51.8047 46.9531L46.748 62.1211L41.9141 48.4375Z"
                        fill="white"
                    />
                </svg>
            )}

            {type === TYPES.powerpoint && (
                <svg
                    width="75"
                    height="100"
                    viewBox="0 0 75 100"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M71.3477 18.2383L56.7715 3.66016C54.4141 1.3168 51.2305 0 47.9297 0H12.5C5.5957 0 0 5.5957 0 12.5L0.00126953 87.5C0.00126953 94.4023 5.59697 100 12.5013 100H62.5C69.375 100 75 94.375 75 87.5V27.0703C75 23.7695 73.6914 20.5859 71.3477 18.2383ZM65.625 87.5C65.625 89.2258 64.2258 90.625 62.5 90.625H12.5039C10.7777 90.625 9.37891 89.2258 9.37891 87.5L9.375 12.5254C9.375 10.7996 10.7742 9.40039 12.5 9.40039H43.75V25C43.75 28.4512 46.5488 31.25 50 31.25H65.4492V87.5H65.625ZM41.9141 48.4375C41.2695 46.5625 39.4922 45.3125 37.5 45.3125C35.5078 45.3125 33.7402 46.5637 33.082 48.4375L28.2617 62.1289L23.2051 46.9609C22.3828 44.4922 19.7266 43.2031 17.2676 43.9844C14.8105 44.8047 13.4863 47.4609 14.3027 49.9219L23.6777 78.0469C24.3164 79.9414 26.0742 81.2305 28.0859 81.25C30.0723 81.25 31.8848 79.9988 32.5449 78.125L37.5 64.082L42.4609 78.125C43.125 80 44.8828 81.25 46.875 81.25C48.8809 81.2317 50.6895 79.9437 51.3223 78.0449L60.6973 49.9199C61.5152 47.4609 60.1906 44.8105 57.7344 43.9863C55.2715 43.1807 52.6172 44.493 51.8047 46.9531L46.748 62.1211L41.9141 48.4375Z"
                        fill="white"
                    />
                </svg>
            )}

            {type === TYPES.excel && (
                <svg
                    width="70"
                    height="93"
                    viewBox="0 0 70 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M66.5911 16.9616L52.9867 3.40395C50.7865 1.22462 47.8151 0 44.7344 0H11.6667C5.22266 0 0 5.204 0 11.625L0.0011849 81.375C0.0011849 87.7942 5.22384 93 11.6679 93H58.3333C64.75 93 70 87.7688 70 81.375V25.1754C70 22.1057 68.7786 19.1449 66.5911 16.9616ZM61.25 81.375C61.25 82.98 59.9441 84.2812 58.3333 84.2812H11.6703C10.0592 84.2812 8.75365 82.98 8.75365 81.375L8.75 11.6486C8.75 10.0436 10.0559 8.74236 11.6667 8.74236H40.8333V23.25C40.8333 26.4596 43.4456 29.0625 46.6667 29.0625H61.0859V81.375H61.25ZM41.763 42.3768L35 51.0229L28.237 42.3768C26.7604 40.4695 24.026 40.1244 22.112 41.6139C20.1979 43.0852 19.8516 45.8279 21.3464 47.7352L29.4583 58.125L21.3409 68.5239C19.8541 70.4257 20.2016 73.1667 22.1043 74.6434C22.9141 75.2537 23.8438 75.5625 24.6276 75.5625C25.9321 75.5625 27.2253 74.9834 28.0857 73.8823L35 65.2271L41.7557 73.8823C42.6198 74.9812 43.9141 75.5625 45.2083 75.5625C46.1426 75.5625 47.0878 75.2617 47.8917 74.643C49.7948 73.1672 50.1411 70.4253 48.6551 68.5236L40.5417 58.125L48.6591 47.7261C50.1459 45.8243 49.7984 43.0833 47.8957 41.6066C45.974 40.1244 43.2396 40.4695 41.763 42.3768Z"
                        fill="white"
                    />
                </svg>
            )}

            {type === TYPES.generic && (
                <i>
                    <FaFileAlt />
                </i>
            )}

            <p>Descargar</p>
        </FileCardStyled>
    )
}
