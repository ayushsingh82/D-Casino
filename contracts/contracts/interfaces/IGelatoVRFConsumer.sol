// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

/// @title IGelatoVRFConsumer
/// @dev Interface for consuming random number provided by Drand.
/// @notice This interface allows contracts to receive a random number provided by Gelato VRF.
interface IGelatoVRFConsumer {
    /// @notice Event emitted when a randomness request is made.
    /// @param data The round of randomness to request.
    /// @param data Additional data associated with the request.
    event RequestedRandomness(uint256 round, bytes data);

    /// @notice Callback function used by Gelato to return the random number.
    /// @dev The random number is fetched from one among many drand endpoints
    /// and passed back to this function like in a Gelato Web3 Function.
    /// @param randomness The random number generated by drand.
    /// @param data Additional data provided by Gelato VRF or the user, typically unused.
    function fulfillRandomness(
        uint256 randomness,
        bytes calldata data
    ) external;
}